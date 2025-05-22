// app/api/jotform-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";

// Gelen JotForm verisi için daha spesifik bir tip (eğer biliniyorsa) veya genel bir Record
type JotFormRawData = {
	formID?: string;
	submissionID?: string;
	formTitle?: string;
	submissionDate?: string;
	ip?: string;
	[key: string]: any; 
};

type JotFormSubmission = {
	formID: string;
	submissionID: string;
	formTitle: string;
	submissionDate: string;
	ip: string;
	formData: Record<string, any>; // Formun içindeki cevaplar için
};

export async function POST(request: NextRequest) {
	try {
		// Önce ham isteği metin olarak alıp loglayalım
		const rawBody: string = await request.text();
		console.log("Raw JotForm webhook body:", rawBody);

		let parsedData: JotFormRawData;
		try {
			// Ham metni JSON olarak ayrıştırmaya çalışalım
			parsedData = JSON.parse(rawBody) as JotFormRawData;
		} catch (parseError: unknown) { // Hata tipini unknown olarak yakala
			console.error("JSON parsing error:", parseError);
			// Eğer parseError bir Error instance ise mesajını kullan, değilse genel bir mesaj
			const errorMessage: string = parseError instanceof Error ? parseError.message : "Unknown parsing error";
			return NextResponse.json(
				{
					success: false,
					message: "Geçersiz veri formatı. JotForm'dan JSON bekleniyordu.",
					errorDetails: errorMessage,
					receivedBodySnippet: rawBody.substring(0, 200) + "..." // Gelen verinin bir kısmını logla
				},
				{ status: 400 }
			);
		}

		// Gelen veriyi kontrol et (parsedData üzerinden)
		if (!parsedData || !parsedData.formID || !parsedData.submissionID) {
			return NextResponse.json(
				{ success: false, message: "Geçersiz veya eksik JotForm verisi (formID veya submissionID eksik)" },
				{ status: 400 }
			);
		}

		// JotForm verilerini yapılandırılmış bir formata dönüştür
		// formID, submissionID gibi bilinen alanları ayır, geri kalanını formData içine al
		const {
			formID,
			submissionID,
			formTitle,
			submissionDate,
			ip,
			...actualFormData // Geri kalan tüm alanlar actualFormData içine toplanır
		} = parsedData;

		const submission: JotFormSubmission = {
			formID: String(formID), // Gelen verinin string olduğundan emin olalım
			submissionID: String(submissionID),
			formTitle: String(formTitle || "Bilinmeyen Form"),
			submissionDate: String(submissionDate || new Date().toISOString()),
			ip: String(ip || request.headers.get("x-forwarded-for") || "unknown"),
			formData: actualFormData // Kalan tüm alanlar form verisi olarak kabul edilir
		};

		console.log("JotForm verisi alındı ve işlendi:", submission);

		return NextResponse.json({
			success: true,
			message: "Form verisi başarıyla alındı",
			data: { id: submission.submissionID }
		});
	} catch (error: unknown) { // Hata tipini unknown olarak yakala
		console.error("JotForm webhook genel hatası:", error);
		const errorMessage: string = error instanceof Error ? error.message : "Bilinmeyen bir sunucu hatası oluştu";
		return NextResponse.json(
			{ success: false, message: "Sunucu hatası oluştu", error: errorMessage },
			{ status: 500 }
		);
	}
}

// GET, PUT, DELETE metodları aynı kalır
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