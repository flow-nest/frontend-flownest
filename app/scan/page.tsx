import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import QrScanner from "@/components/codebar/qrScanner";

export default function ScanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EBE0]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 text-[#5D4037]">
            QR Code Scanner
          </h1>
          <QrScanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}
