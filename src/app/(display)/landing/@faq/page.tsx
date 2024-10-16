import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqData = [
    {
      question: "Seragam Batik untuk Apa Saja?",
      answer:
        "Rianty Batik menghadirkan produk seragam batik untuk memenuhi segala kebutuhan Anda, baik itu Personal, Perusahaan, Sekolah, Kedinasan, Organisasi, serta Komunitas-komunitas yang ingin menunjukkan eksistensinya.",
    },
    {
      question: "Jenis Seragam Apa yang Diproduksi Rianty Batik?",
      answer:
        "Batik seragam yang diproduksi mulai dari tekstil printing bermotif batik dan batik tulis dalam bentuk kain maupun pakaian jadi siap pakai.",
    },
    {
      question: "Bagaimana Saya Bisa Mendapatkan Harga Diskon?",
      answer:
        "Dengan memesan dalam jumlah banyak, Anda akan mendapatkan potongan harga sehingga akan lebih hemat.",
    },
    {
      question: "Berapa Minimal Pembelian?",
      answer:
        "Batas minimum pemesanan adalah 20 potong & Anda akan mendapatkan gratis desain dari kami.",
    },
    {
      question: "Apa Saya Bisa Mendapat Katalog Produk?",
      answer:
        "Kami akan menyediakan katalog produk (fisik) pada saat bertemu dengan klien.",
    },
    {
      question: "Berapa Biaya atau Ongkos Kirimnya?",
      answer:
        "Untuk ongkos kirim disesuaikan dengan kota pemesan. Kami bekerjasama dengan dengan beberapa jasa ekspedisi dengan pengiriman cepat dan murah.",
    },
    {
      question: "Bagaimana Cara Memesan Batik Seragam?",
      answer:
        "Anda dapat menghubungi kontak WA Admin berikut 0889-8909-9909. Untuk informasi & konsultasi lebih lanjut, silahkan mengunjungi kantor pusat kami di alamat WIJAYAKUSUMA WAREHOUSE, Jl. Wijaya Kusuma no. 151B, Kutu Dukuh, Sinduadi, Sleman, DIY, 55284 (Belakang TVRI).",
    },
    {
      question: "Proses Produksi Batik Seragam Berapa Lama?",
      answer:
        "Batik seragam diproduksi selama kurang lebih 3-4 minggu atau disesuaikan dengan antrian (diluar konsultasi & proses desain).",
    },
    {
      question: "Bagaimana kualitas hasil produksi Seragam Rianty Batik?",
      answer:
        "Rianty Batik memproduksi batik dengan bahan berkualitas, jahitan rapi, serta nyaman dipakai.",
    },
    {
      question: "Bisakah Memilih Motif, Warna & Ukuran?",
      answer:
        "Tentu saja bisa. Anda bisa memilih motif, warna & ukuran sesuai dengan kebutuhan perusahaan atau komunitas Anda.",
    },
  ];
  return (
    <>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <h1>FAQ</h1>
        </div>
      </div>
      <div>
        {faqData.map((item, index) => (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  );
}
