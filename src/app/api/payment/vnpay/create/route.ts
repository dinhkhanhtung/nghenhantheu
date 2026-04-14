import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// VNPay configuration - should be in .env.local
const VNP_TMNCODE = process.env.VNPAY_TMN_CODE || "DEMO";
const VNP_HASHSECRET = process.env.VNPAY_HASH_SECRET || "DEMO_SECRET";
const VNP_URL = process.env.VNPAY_URL || "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
const VNP_RETURNURL = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/thanh-toan/ket-qua`;

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
    if (VNP_TMNCODE === "DEMO" || !VNP_HASHSECRET) {
      // DEMO MODE: Return a mock payment URL that will simulate success
      const mockPaymentUrl = `/thanh-toan/ket-qua?vnp_ResponseCode=00&vnp_TxnRef=${orderId}&vnp_Amount=${amount * 100}&demo=true`;
      return NextResponse.json({ paymentUrl: mockPaymentUrl });
    }

    // REAL VNPAY INTEGRATION
    const date = new Date();
    const createDate = date.toISOString().replace(/\D/g, "").slice(0, 14);
    const expireDate = new Date(date.getTime() + 15 * 60000).toISOString().replace(/\D/g, "").slice(0, 14);

    const vnpParams: Record<string, string> = {
      vnp_Version: "2.1.0",
      vnp_Command: "pay",
      vnp_TmnCode: VNP_TMNCODE,
      vnp_Locale: "vn",
      vnp_CurrCode: "VND",
      vnp_TxnRef: orderId,
      vnp_OrderInfo: orderInfo || `Thanh toan don hang ${orderId}`,
      vnp_OrderType: "other",
      vnp_Amount: (amount * 100).toString(),
      vnp_ReturnUrl: VNP_RETURNURL,
      vnp_IpAddr: "127.0.0.1",
      vnp_CreateDate: createDate,
      vnp_ExpireDate: expireDate,
    };

    // Sort params alphabetically
    const sortedParams = Object.keys(vnpParams)
      .sort()
      .reduce((obj: Record<string, string>, key) => {
        obj[key] = vnpParams[key];
        return obj;
      }, {});

    // Create query string
    const signData = Object.entries(sortedParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    // Create signature
    const hmac = crypto.createHmac("sha512", VNP_HASHSECRET);
    const signed = hmac.update(signData).digest("hex");

    const paymentUrl = `${VNP_URL}?${signData}&vnp_SecureHash=${signed}`;

    return NextResponse.json({ paymentUrl });
  } catch (error) {
    console.error("VNPay create payment error:", error);
    return NextResponse.json(
      { error: "Failed to create payment" },
      { status: 500 }
    );
  }
}
