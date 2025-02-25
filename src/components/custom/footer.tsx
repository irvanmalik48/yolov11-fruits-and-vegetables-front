export default function Footer() {
  return (
    <footer className="w-full border-t border-border">
      <div className="flex items-center justify-between px-5 py-3 md:border-x border-border w-full max-w-5xl mx-auto">
        <p className="w-full text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Irvan Malik Azantha. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
