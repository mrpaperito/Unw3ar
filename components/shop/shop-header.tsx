import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ShopHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <nav className="flex items-center space-x-8">
          <a href="/" className="text-xl font-bold">UNWEAR</a>
          <a href="/shop" className="text-sm text-muted-foreground hover:text-foreground">Shop</a>
          <a href="/drops" className="text-sm text-muted-foreground hover:text-foreground">Drops</a>
        </nav>
        <Button variant="ghost" size="icon">
          <ShoppingBag className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}