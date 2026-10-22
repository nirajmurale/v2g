import { useState } from 'react';
import {
  QrCode,
  Landmark,
  Copy,
  Check,
  Download,
  Smartphone,
  MessageCircle,
  ShieldCheck,
  Camera,
  FileSignature,
} from 'lucide-react';
import {
  BANK_DETAILS,
  UPI_ID,
  UPI_LINK,
  UPI_NAME,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
} from '@/data/mockData';

type Method = 'qr' | 'bank' | 'cheque';

const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello v2gaiacademy, I have completed my payment. Sharing the screenshot here.\n\nName:\nCourse:'
);

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Older browsers: fall back to a temporary text field
      const el = document.createElement('textarea');
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      el.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={copy}
      aria-label={`Copy ${label}`}
      className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
        copied ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
      }`}
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function DetailRow({ label, value, copy = true }: { label: string; value: string; copy?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-slate-100 last:border-b-0">
      <div className="min-w-0">
        <p className="text-sm text-slate-500">{label}</p>
        <p className="mt-0.5 font-semibold text-slate-900 text-lg tracking-wide break-all">{value}</p>
      </div>
      {copy && <CopyButton value={value} label={label} />}
    </div>
  );
}

export default function PaymentPage() {
  const [method, setMethod] = useState<Method>('qr');

  const tabs: { id: Method; label: string; sub: string; icon: typeof QrCode }[] = [
    { id: 'qr', label: 'Scan QR code', sub: 'GPay, PhonePe or any UPI app', icon: QrCode },
    { id: 'bank', label: 'Bank transfer', sub: 'NEFT or IMPS from your bank', icon: Landmark },
    { id: 'cheque', label: 'Cheque', sub: 'Deposit at your bank branch', icon: FileSignature },
  ];

  return (
    <div className="pb-16">
      {/* Heading */}
      <section className="pt-6 pb-8 text-center max-w-2xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Pay your course fee
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Pay by UPI, bank transfer or cheque. After paying, send us the screenshot on WhatsApp to confirm your seat.
        </p>
      </section>

      <div className="max-w-3xl mx-auto">
        {/* Method picker */}
        <div role="tablist" aria-label="Payment method" className="grid grid-cols-3 gap-2 sm:gap-3">
          {tabs.map((t) => {
            const active = method === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={active}
                onClick={() => setMethod(t.id)}
                className={`flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left rounded-2xl border-2 p-3 sm:p-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  active ? 'border-indigo-600 bg-indigo-50' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <span
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    active ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <t.icon className="w-5 h-5" />
                </span>
                <span>
                  <span className="block font-semibold text-slate-900 text-sm sm:text-base">{t.label}</span>
                  <span className="hidden sm:block text-sm text-slate-500">{t.sub}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="mt-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 sm:p-8">
          {method === 'qr' && (
            <div className="grid sm:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="mx-auto w-full max-w-[280px]">
                <div className="rounded-3xl bg-white border border-slate-200 p-4 shadow-sm">
                  <img
                    src="/payment-qr.jpg"
                    alt={`UPI QR code for ${UPI_NAME}`}
                    width={720}
                    height={720}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <a
                  href="/payment-qr.jpg"
                  download="v2gaiacademy-payment-qr.jpg"
                  className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-800"
                >
                  <Download className="w-4 h-4" />
                  Save QR to phone
                </a>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900">Scan and pay with UPI</h2>
                <ol className="mt-4 space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                    Open PhonePe, Google Pay, Paytm or any UPI app.
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                    Scan the QR code and enter your course fee.
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                    Take a screenshot of the successful payment.
                  </li>
                </ol>

                <div className="mt-6 rounded-2xl bg-white border border-slate-200 px-4">
                  <DetailRow label="UPI ID" value={UPI_ID} />
                  <DetailRow label="Name" value={UPI_NAME} copy={false} />
                </div>

                {/* On phones, open the UPI app directly */}
                <a
                  href={UPI_LINK}
                  className="sm:hidden mt-4 flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold"
                >
                  <Smartphone className="w-4 h-4" />
                  Open UPI app to pay
                </a>
              </div>
            </div>
          )}

          {method === 'bank' && (
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900">Pay by NEFT or IMPS</h2>
              <p className="mt-2 text-slate-600">
                Add these details as a beneficiary in your bank app or net banking, then transfer your course fee.
              </p>
              <div className="mt-6 rounded-2xl bg-white border border-slate-200 px-4 sm:px-5">
                <DetailRow label="Account name" value={BANK_DETAILS.accountName} />
                <DetailRow label="Account number" value={BANK_DETAILS.accountNumber} />
                <DetailRow label="IFSC code" value={BANK_DETAILS.ifsc} />
                <DetailRow label="Bank" value={BANK_DETAILS.bank} copy={false} />
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Please double-check the account number and IFSC before sending. Take a screenshot once the transfer is successful.
              </p>
            </div>
          )}

          {method === 'cheque' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900">Pay by cheque</h2>
                <p className="mt-2 text-slate-600">
                  Deposit the cheque at your own bank branch. The bank sends the money to our account.
                </p>
                <ol className="mt-5 space-y-4 text-slate-700">
                  {[
                    <>Write the cheque in the name of <span className="font-semibold text-slate-900">{BANK_DETAILS.accountName}</span> for your course fee.</>,
                    <>Write your name and phone number on the back of the cheque.</>,
                    <>At your bank, fill the deposit slip with the account details shown here and hand over the cheque.</>,
                    <>Keep the <span className="font-semibold text-slate-900">counterfoil slip stamped by the bank</span> and take a clear photo of it.</>,
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Details for the deposit slip</p>
                <div className="mt-3 rounded-2xl bg-white border border-slate-200 px-4 sm:px-5">
                  <DetailRow label="Pay to (cheque name)" value={BANK_DETAILS.accountName} />
                  <DetailRow label="Account number" value={BANK_DETAILS.accountNumber} />
                  <DetailRow label="IFSC code" value={BANK_DETAILS.ifsc} />
                  <DetailRow label="Bank" value={BANK_DETAILS.bank} copy={false} />
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  Cheques usually take 1–3 working days to clear. Your seat is confirmed once the amount reaches our account.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* WhatsApp note */}
        <div className="mt-5 rounded-[2rem] bg-emerald-50 border border-emerald-200 p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5">
          <span className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <Camera className="w-6 h-6" />
          </span>
          <div className="flex-1">
            <h2 className="font-display text-lg font-bold text-slate-900">After paying, send us the screenshot</h2>
            <p className="mt-1 text-slate-700">
              WhatsApp your payment screenshot (or a photo of the stamped cheque slip) with your name and course to{' '}
              <span className="font-semibold text-slate-900 whitespace-nowrap">+91 {WHATSAPP_NUMBER}</span>. We’ll confirm your enrollment.
            </p>
          </div>
          <a
            href={`${WHATSAPP_LINK}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Send on WhatsApp
          </a>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          Only pay to the UPI ID or bank account shown on this page.
        </p>
      </div>
    </div>
  );
}
