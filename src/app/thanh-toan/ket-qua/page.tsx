"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Loader2, Truck, Home, FileText, CreditCard } from "lucide-react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function PaymentResultPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "failed">("loading");
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState("");

  // VNPay params
  const vnpResponseCode = searchParams.get("vnp_ResponseCode");
  const vnpTxnRef = searchParams.get("vnp_TxnRef");
  const vnpAmount = searchParams.get("vnp_Amount");
  
  // Momo params
  const momoResultCode = searchParams.get("resultCode");
  const momoOrderId = searchParams.get("orderId");
  const momoAmount = searchParams.get("amount");
  
  // Demo mode
  const isDemo = searchParams.get("demo") === "true";

  useEffect(() => {
    const processPayment = async () => {
      try {
        // Determine payment method and order ID
        let orderId = vnpTxnRef || momoOrderId?.split("_")[0] || "";
        let isSuccess = false;
        let paymentMethod = "";

        if (vnpResponseCode !== null) {
          // VNPay payment
          paymentMethod = "VNPAY";
          isSuccess = vnpResponseCode === "00";
        } else if (momoResultCode !== null) {
          // Momo payment
          paymentMethod = "MOMO";
          isSuccess = momoResultCode === "0";
        } else {
          setStatus("failed");
          setErrorMessage("Không xác định được phương thức thanh toán");
          return;
        }

        if (!orderId) {
          setStatus("failed");
          setErrorMessage("Không tìm thấy mã đơn hàng");
          return;
        }

        // Update order status in Firebase
        if (db && !isDemo) {
          const orderRef = doc(db, "orders", orderId);
          
          if (isSuccess) {
            await updateDoc(orderRef, {
              status: "Đã thanh toán",
              paymentStatus: "success",
              paidAt: new Date(),
            });
          } else {
            await updateDoc(orderRef, {
              status: "Thanh toán thất bại",
              paymentStatus: "failed",
            });
          }

          // Fetch order details
          const orderSnap = await getDoc(orderRef);
          if (orderSnap.exists()) {
            setOrderDetails(orderSnap.data());
          }
        }

        setStatus(isSuccess ? "success" : "failed");
        
        if (!isSuccess) {
          setErrorMessage("Giao dịch không thành công. Vui lòng thử lại sau.");
        }
      } catch (error) {
        console.error("Payment result error:", error);
        setStatus("failed");
        setErrorMessage("Có lỗi xảy ra khi xử lý thanh toán");
      }
    };

    processPayment();
  }, [vnpResponseCode, vnpTxnRef, momoResultCode, momoOrderId, isDemo]);

  // Loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#fffbf5] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Loader2 size={48} className="animate-spin text-[#b45309] mx-auto mb-4" />
          <p className="text-[#57534e]">Đang xử lý thanh toán...</p>
          {isDemo && (
            <p className="text-xs text-[#a8a29e] mt-2">(Chế độ demo - không thực hiện thanh toán thật)</p>
          )}
        </motion.div>
      </div>
    );
  }

  // Success state
  if (status === "success") {
    return (
      <div className="min-h-screen bg-[#fffbf5] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-[#e7e5e4] text-center max-w-lg w-full"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          
          <h1 className="text-2xl font-bold text-[#1c1917] mb-3">
            Thanh toán thành công!
          </h1>
          
          <p className="text-[#57534e] mb-6">
            Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đã được thanh toán thành công.
            {orderDetails && (
              <span className="block mt-2 font-medium">
                Mã đơn hàng: <span className="text-[#b45309]">HK{orderDetails.id?.substring(0, 6).toUpperCase()}</span>
              </span>
            )}
          </p>

          {orderDetails && (
            <div className="bg-[#f5f5f4] p-4 rounded-xl mb-6 text-left">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#57534e]">Phương thức:</span>
                <span className="font-medium text-[#1c1917]">
                  {orderDetails.paymentMethod === "VNPAY" ? "VNPay" : 
                   orderDetails.paymentMethod === "MOMO" ? "Ví Momo" : 
                   orderDetails.paymentMethod}
                </span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#57534e]">Số tiền:</span>
                <span className="font-medium text-[#1c1917]">
                  {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(orderDetails.total || 0)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#57534e]">Trạng thái:</span>
                <span className="font-medium text-green-600">Đã thanh toán</span>
              </div>
            </div>
          )}

          {isDemo && (
            <p className="text-xs text-[#a8a29e] mb-4 bg-yellow-50 p-2 rounded">
              ⚠️ Đây là chế độ demo. Thanh toán thật cần cấu hình API key.
            </p>
          )}
          
          <div className="space-y-3">
            <Link 
              href="/tai-khoan?tab=orders" 
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#b45309] text-white font-medium rounded-xl hover:bg-[#92400e] transition-colors"
            >
              <FileText size={18} />
              Xem đơn hàng của tôi
            </Link>
            
            <Link 
              href="/" 
              className="flex items-center justify-center gap-2 w-full py-3 border border-[#e7e5e4] text-[#1c1917] font-medium rounded-xl hover:bg-[#f5f5f4] transition-colors"
            >
              <Home size={18} />
              Quay lại trang chủ
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Failed state
  return (
    <div className="min-h-screen bg-[#fffbf5] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-[#e7e5e4] text-center max-w-lg w-full"
      >
        <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle size={40} />
        </div>
        
        <h1 className="text-2xl font-bold text-[#1c1917] mb-3">
          Thanh toán không thành công
        </h1>
        
        <p className="text-[#57534e] mb-6">
          {errorMessage || "Giao dịch không thành công. Vui lòng thử lại sau hoặc chọn phương thức thanh toán khác."}
        </p>

        {isDemo && (
          <p className="text-xs text-[#a8a29e] mb-4 bg-yellow-50 p-2 rounded">
            ⚠️ Đây là chế độ demo.
          </p>
        )}
        
        <div className="space-y-3">
          <Link 
            href="/thanh-toan" 
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#b45309] text-white font-medium rounded-xl hover:bg-[#92400e] transition-colors"
          >
            <CreditCard size={18} />
            Thử thanh toán lại
          </Link>
          
          <Link 
            href="/gio-hang" 
            className="flex items-center justify-center gap-2 w-full py-3 border border-[#e7e5e4] text-[#1c1917] font-medium rounded-xl hover:bg-[#f5f5f4] transition-colors"
          >
            <Truck size={18} />
            Quay lại giỏ hàng
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

