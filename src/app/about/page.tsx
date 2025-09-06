"use client";

import BreadCrumb from "@/components/shared/BreadCrumb";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="min-h-screen pb-8">
      <BreadCrumb title="About us" />
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          JulyByOma is a premier fashion bespoke brand dedicated to crafting
          exquisite, tailor-made pieces that celebrate individuality and
          elegance. At JulyByOma, we believe that fashion is an art form, and
          every creation is a unique masterpiece designed to reflect the
          personal style and essence of our clients.
        </p>
      </div>
     
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-center">Our Collections</h3>

        <div className="grid md:grid-cols-2 gap-6">
         
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-3">
              <h4 className="text-xl font-semibold">Made to Order Dresses</h4>
              <p className="text-muted-foreground">
                Our made-to-order dresses are designed with meticulous attention
                to detail, ensuring each piece is a perfect fit for your special
                occasions. From glamorous evening gowns to chic cocktail
                dresses, our collection offers timeless elegance and
                contemporary style.
              </p>
            </CardContent>
          </Card>

         
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-3">
              <h4 className="text-xl font-semibold">Bespoke Outfits</h4>
              <p className="text-muted-foreground">
                Experience the luxury of bespoke fashion with our custom-made
                outfits. Whether it’s a sophisticated suit for a business
                meeting or a stunning ensemble for a wedding, our bespoke
                service guarantees a one-of-a-kind garment tailored specifically
                to your measurements and preferences.
              </p>
            </CardContent>
          </Card>

         
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-3">
              <h4 className="text-xl font-semibold">Pants</h4>
              <p className="text-muted-foreground">
                Discover the perfect blend of comfort and style with our bespoke
                pants. From tailored trousers to relaxed-fit designs, our pants
                are crafted to provide an impeccable fit and unparalleled
                comfort, making them an essential addition to any wardrobe.
              </p>
            </CardContent>
          </Card>

         
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-3">
              <h4 className="text-xl font-semibold">Skirts</h4>
              <p className="text-muted-foreground">
                Our collection of bespoke skirts offers a variety of styles,
                from classic pencil skirts to flowing A-line designs. Each skirt
                is created to enhance your silhouette and provide a versatile
                piece that can be dressed up or down for any occasion.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
