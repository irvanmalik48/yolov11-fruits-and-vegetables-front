export default function Footer() {
  return (
    <footer className="w-full border-t border-border px-5 py-3 mt-auto">
      <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
        <p className="w-full text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Irvan Malik Azantha. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
