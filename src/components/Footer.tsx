export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 py-8 text-center sm:px-8 md:flex-row md:justify-between md:text-left lg:px-10">
        <p className="text-base font-extrabold text-text">
          Rishav <span className="text-primary">Kumar</span>
        </p>
        <p className="text-xs font-medium text-muted sm:text-sm">
          Senior Associate QA &nbsp;|&nbsp; 4+ Years of Experience &nbsp;|&nbsp;
          20+ Projects
        </p>
        <p className="text-xs font-medium text-muted/70 sm:text-sm">
          © {new Date().getFullYear()} Rishav Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
