import { DealsResponse } from "../types";

export const getDeals = async () => {
    const headers = new Headers();

    // headers.append("Content-Type", "application/json");
    // headers.append("Accept", "application/json");
    headers.append(
        "Authorization",
        `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg5NDc1Y2FiM2Y3MzFhYzE4OTBlMGQ3OGJhYjVjOTMxNDFmNmJkMzhkZTcwYjBmYTM1YTJhZTZiZWQ4MDZmZGFmODM4ZmZhYjZlOTNmODkzIn0.eyJhdWQiOiIyZTdmOTM3Yy00MzkxLTRiOGEtOGRlZS1kZGUzNTk1NmVlYmMiLCJqdGkiOiI4OTQ3NWNhYjNmNzMxYWMxODkwZTBkNzhiYWI1YzkzMTQxZjZiZDM4ZGU3MGIwZmEzNWEyYWU2YmVkODA2ZmRhZjgzOGZmYWI2ZTkzZjg5MyIsImlhdCI6MTcyNjIzOTUxNywibmJmIjoxNzI2MjM5NTE3LCJleHAiOjE3MzAzMzI4MDAsInN1YiI6IjExNTE5MDkwIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTUwNTI2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMTFiYjZiOWQtMTZhOC00MGNiLWFiY2MtZDM4M2ZlZmM5MmJmIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.J9C1xDdTKi8yynfyH2cAv_cRfcwY45e1jX7okjWdrYUdHp_Pb1uKKDTCy0pt3teBEg7rb1geMOXz_-MwX30ZjhLdC9NU-122G-LD9I6jQr6MWarLqaFWX69wKVDlX4Tde6gO3a0lfNKhFIzg7HvB1cLaN0CgNbjL1XIpIsxRFCcg058ZT22tWpgiVrifBjQUrT8LJkgxL9j7rTZmRXDxmVyAVVpVEnevXatSrn9ij8Xhza4SOO1BNFJ_-FHB-EpL3UvmYCY2Qt9wadLWmnVgAZ9ceqpf_yiFHU1tVfIfArL3SAIi19yHWNcdxYLSIOH08Lek1j-n5ObsP8HhayiMgA`,
    );
    headers.append("Origin", "https://localhost:5173");

    const response = await fetch("https://thexcat86.amocrm.ru/api/v4/leads", {
        headers,
        mode: "no-cors",
    });

    if (!response.ok) {
        console.error(response);
        throw new Error("Failed to get deals");
    }
    const data: DealsResponse = await response.json();

    const parsedData = data._embedded.leads;
    return parsedData;
};
