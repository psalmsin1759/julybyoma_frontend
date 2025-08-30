"use client";
import { useModal } from "@/contexts/ModalContext";
import SizeChartModal from "./modals/SizeChart";

const GlobalModals = () => {
  const { modal, closeModal } = useModal();

  if (!modal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[400px] relative">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {modal === "sizeChart" && <SizeChartModal/>}
        {modal === "login" && <p>🔑 Login Modal</p>}
        {modal === "register" && <p>📝 Register Modal</p>}
        {modal === "newsletter" && <p>📨 Newsletter Modal</p>}
      </div>
    </div>
  );
};

export default GlobalModals;
