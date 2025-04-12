import QrScanner from "@/components/codebar/qrScanner";

export default function ScanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5EBE0]">
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <QrScanner />
        </div>
      </main>
    </div>
  );
}
