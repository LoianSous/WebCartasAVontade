export default function Page() {
  return (
    <pre>
      {JSON.stringify(
        {
          url: process.env.NEXT_PUBLIC_SUPABASE_URL,
          anon: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "ok" : "missing",
          service: process.env.SUPABASE_SERVICE_ROLE_KEY ? "ok" : "missing"
        },
        null,
        2
      )}
    </pre>
  );
}
