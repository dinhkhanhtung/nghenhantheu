import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Momo configuration - should be in .env.local
const MOMO_PARTNER_CODE = process.env.MOMO_PARTNER_CODE || "DEMO";
const MOMO_ACCESS_KEY = process.env.MOMO_ACCESS_KEY || "DEMO";
const MOMO_SECRET_KEY = process.env.MOMO_SECRET_KEY || "DEMO_SECRET";
const MOMO_ENDPOINT = process.env.MOMO_ENDPOINT || "https://test-payment.momo.vn/v2/gateway/api/create";
const MOMO_REDIRECT_URL = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/thanh-toan/ket-qua`;
const MOMO_IPN_URL = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/payment/momo/ipn`;

export async function POST(request: NextRequest) {
  try {
    const { orderId, amount, orderInfo } = await request.json();

    if (!orderId || !amount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if using demo mode
    if (MOMO_PARTNER_CODE === "DEMO" || !MOMO_SECRET_KEY) {
      // DEMO MODE: Return a mock payment URL that will simulate success
      const mockPayUrl = `/thanh-toan/ket-qua?resultCode=0&orderId=${orderId}&amount=${amount}&demo=true`;
      return NextResponse.json({ payUrl: mockPayUrl });
    }

    // REAL MOMO INTEGRATION
    const requestId = `${Date.now()}`;
    const orderIdMomo = `${orderId}_${Date.now()}`;
    
    const rawSignature = `accessKey=${MOMO_ACCESS_KEY}&amount=${amount}&extraData=&ipnUrl=${MOMO_IPN_URL}&orderId=${orderIdMomo}&orderInfo=${orderInfo}&partnerCode=${MOMO_PARTNER_CODE}&redirectUrl=${MOMO_REDIRECT_URL}&requestId=${requestId}&requestType=captureWallet`;

    const signature = crypto
      .createHmac("sha256", MOMO_SECRET_KEY)
      .update(rawSignature)
      .digest("hex");

    const requestBody = {
      partnerCode: MOMO_PARTNER_CODE,
      partnerName: "Test",
      storeId: "MomoTestStore",
      requestId: requestId,
      amount: amount,
      orderId: orderIdMomo,
      orderInfo: orderInfo || `Thanh toan don hang ${orderId}`,
      redirectUrl: MOMO_REDIRECT_URL,
      ipnUrl: MOMO_IPN_URL,
      lang: "vi",
      requestType: "captureWallet",
      autoCapture: true,
      extraData: "",
      signature: signature,
    };

    const response = await fetch(MOMO_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();

    if (result.payUrl) {
      return NextResponse.json({ payUrl: result.payUrl });
    } else {
      return NextResponse.json(
        { error: result.message || "Failed to create Momo payment" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Momo create payment error:", error);
    return NextResponse.json(
      { error: "Failed to create payment" },
      { status: 500 }
    );
  }
}
