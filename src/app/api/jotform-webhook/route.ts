// app/api/jotform-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";

type JotFormSubmission = {
	formID: string;
	submissionID: string;
	formTitle: string;
	submissionDate: string;
	ip: string;
	formData: Record<string, any>;
};

export async function POST(request: NextRequest) {
	try {
		// JotForm'dan gelen veriyi al
		const formData = await request.json();

		// Gelen veriyi kontrol et
		if (!formData || !formData.formID) {
			return NextResponse.json(
				{ success: false, message: "Geçersiz JotForm verisi" },
				{ status: 400 }
			);
		}

		// JotForm verilerini yapılandırılmış bir formata dönüştür
		const submission: JotFormSubmission = {
			formID: formData.formID,
			submissionID: formData.submissionID,
			formTitle: formData.formTitle || "Bilinmeyen Form",
			submissionDate: formData.submissionDate || new Date().toISOString(),
			ip: formData.ip || request.headers.get("x-forwarded-for") || "unknown",
			formData: { ...formData }
		};

		// Burada verileri işleyebilirsiniz:
		// - Veritabanına kaydetme
		// - E-posta gönderme
		// - Başka bir servise iletme
		console.log("JotForm verisi alındı:", submission);

		// Örnek: Veritabanına kaydetme işlemi
		// await saveToDatabase(submission);

		// Başarılı yanıt gönder
		return NextResponse.json({
			success: true,
			message: "Form verisi başarıyla alındı",
			data: { id: submission.submissionID }
		});
	} catch (error) {
		console.error("JotForm webhook hatası:", error);
		return NextResponse.json(
			{ success: false, message: "Sunucu hatası oluştu" },
			{ status: 500 }
		);
	}
}

// GET, PUT, DELETE gibi diğer istekleri engelleyen bir fonksiyon
export async function GET() {
	return NextResponse.json(
		{ success: false, message: "Method Not Allowed" },
		{ status: 405 }
	);
}

export async function PUT() {
	return NextResponse.json(
		{ success: false, message: "Method Not Allowed" },
		{ status: 405 }
	);
}

export async function DELETE() {
	return NextResponse.json(
		{ success: false, message: "Method Not Allowed" },
		{ status: 405 }
	);
}

// Veritabanına kaydetme fonksiyonu örneği
// async function saveToDatabase(submission: JotFormSubmission) {
//   // Veritabanı bağlantısı ve kayıt işlemleri
//   // Örnek: MongoDB, MySQL, PostgreSQL veya başka bir veritabanı kullanabilirsiniz
// }