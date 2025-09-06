"use client";
import { useModal } from "@/contexts/ModalContext";
import SizeChartModal from "./modals/SizeChart";
import Login from "./auth/Login";

const GlobalModals = () => {
  const { modal, closeModal } = useModal();

  if (!modal) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
      onClick={closeModal} 
    >
      <div
        className="bg-white/0 rounded-2xl shadow-lg p-6 relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {modal === "sizeChart" && <SizeChartModal />}
        {modal === "login" && <Login />}
        {modal === "register" && <p>📝 Register Modal</p>}
        {modal === "newsletter" && <p>📨 Newsletter Modal</p>}
      </div>
    </div>
  );
};

export default GlobalModals;
