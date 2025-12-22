import { api } from "@/app/lib/api";

export async function getLetterByToken(shareToken: string) {
  const res = await api.get(`/letters/share/${shareToken}`);
  return res.data;
}
