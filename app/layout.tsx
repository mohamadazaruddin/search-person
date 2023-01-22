"use client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="bg-primary  dark:bg-[#17161B]  h-screen overflow-y-hidden p-12 max-[768px]:py-0">
          <div className="h-full w-full overflow-y-scroll"> {children}</div>
        </div>
      </body>
    </html>
  );
}
