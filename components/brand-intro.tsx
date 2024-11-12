import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function BrandIntro() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>UNWEAR</CardTitle>
        <CardDescription>Minimal Streetwear. Maximum Impact.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          We believe in the power of simplicity. Each piece in our collection is
          thoughtfully designed to embody minimalist aesthetics while maintaining
          the edge of contemporary streetwear. Our drops are limited, ensuring
          exclusivity and quality in every release.
        </p>
      </CardContent>
    </Card>
  );
}