import { ChevronLeft, MapPin, Minus, Plus, X } from "lucide-react";

import SectionLayout from "@/layouts/sectionLayout";
import { DiscountIcon, MoneyIcon } from "@/components/ui/assets/svg";
import Image from "next/image";
import PaymentMethod from "@/app/(subroot)/checkout/checkoutPaymentMethod";

export default function Page() {
  return (
    <SectionLayout className="relative px-8 py-20">
      <div className="absolute left-8 top-4 inline-flex items-center gap-1 align-baseline lg:hidden">
        <ChevronLeft stroke="#605F5F" className="h-3 w-3" />
        <p className="font-inter text-sm font-medium text-[#605F5F]">back</p>
      </div>

      <div className="space-y-6 pb-20 lg:space-y-10">
        <h1 className="text-center font-poppins text-[40px] font-medium text-[#141718]">
          Check Out
        </h1>
        <div className="flex items-center justify-center gap-4 align-baseline">
          <p className="relative line-clamp-1 pr-4 font-inter text-sm font-medium text-[#38CB89] before:absolute before:right-0 before:content-['/']">
            <span className="mr-2 hidden h-6 w-6 items-center justify-center rounded-full bg-[#38CB89] font-inter text-xs text-white md:inline-flex">
              1
            </span>
            Shopping cart
          </p>
          <p className="relative min-w-max pr-4 font-inter text-sm font-normal text-[#141718] before:absolute before:right-0 before:content-['/']">
            <span className="mr-2 hidden h-6 w-6 items-center justify-center rounded-full bg-[#141718] font-inter text-xs text-white md:inline-flex">
              2
            </span>
            Checkout details
          </p>
          <p className="relative line-clamp-1 pr-4 font-inter text-sm font-normal text-[#605F5F] before:absolute before:right-0 before:content-['/'] last:before:content-['']">
            <span className="mr-2 hidden h-6 w-6 items-center justify-center rounded-full bg-[#605F5F] font-inter text-xs text-white md:inline-flex">
              3
            </span>
            Order complete
          </p>
        </div>
      </div>

      <div className="grid gap-y-6 lg:grid-cols-[6fr_4fr] lg:gap-x-6">
        <div className="space-y-6">
          <div className="space-y-6 rounded-md border border-[#6C7275] p-6">
            <p className="font-poppins text-lg font-semibold text-[#141718]">
              Shipping Address
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin stroke="#141718" className="h-4 w-4" />
                <p className="font-inter text-sm font-semibold text-[#141718]">
                  House
                </p>
              </div>

              <p className="font-inter text-sm font-normal text-[#6C7275]">
                RT02/RW02 Dukuh Jalakan Ds.Wotan Kec.Pulung Kab.Ponorogo (Kasun
                Jalakan)
              </p>

              <button className="h-10 rounded-md bg-[#141718] px-6 font-inter text-sm font-normal text-white">
                Change Address
              </button>
            </div>
          </div>

          <div className="space-y-6 rounded-md border border-[#6C7275] p-6">
            <p className="font-poppins text-lg font-semibold text-[#141718]">
              Orders
            </p>

            <div>
              <div className="flex items-center gap-4 border-b border-[#E8ECEF] py-3 first:pt-0 last:border-b-0 last:pb-0">
                <div className="h-[96px] min-w-[80px] max-w-[80px] bg-[#F3F5F7]">
                  <Image
                    src="/images/sumplekuping-1.png"
                    alt="sumplekuping"
                    width={231}
                    height={308}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-full space-y-2">
                  <div className="flex items-start justify-between gap-8">
                    <p className="line-clamp-1 font-inter text-sm font-semibold text-[#141718] sm:line-clamp-2 md:w-2/3">
                      Skullcandy - Rail True Wireless Earbuds
                    </p>
                    <p className="hidden min-w-max font-inter text-sm font-semibold text-[#141718] sm:block">
                      2 x $120.00
                    </p>
                  </div>

                  <p className="font-inter text-sm font-semibold text-[#141718] sm:hidden">
                    2 x $120.00
                  </p>

                  <p className="font-inter text-sm font-normal text-[#6C7275]">
                    Color: Black
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-b border-[#E8ECEF] py-3 first:pt-0 last:border-b-0 last:pb-0">
                <div className="h-[96px] min-w-[80px] max-w-[80px] bg-[#F3F5F7]">
                  <Image
                    src="/images/sumplekuping-2.png"
                    alt="sumplekuping"
                    width={231}
                    height={308}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-full space-y-2">
                  <div className="flex items-start justify-between gap-8">
                    <p className="line-clamp-1 font-inter text-sm font-semibold text-[#141718] sm:line-clamp-2 md:w-2/3">
                      Sony - WH-CH720N Wireless Noise Canceling
                    </p>
                    <p className="hidden min-w-max font-inter text-sm font-semibold text-[#141718] sm:block">
                      2 x $99.00
                    </p>
                  </div>

                  <p className="font-inter text-sm font-semibold text-[#141718] sm:hidden">
                    2 x $99.00
                  </p>

                  <p className="font-inter text-sm font-normal text-[#6C7275]">
                    Color: White
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-b border-[#E8ECEF] py-3 first:pt-0 last:border-b-0 last:pb-0">
                <div className="h-[96px] min-w-[80px] max-w-[80px] bg-[#F3F5F7]">
                  <Image
                    src="/images/sumplekuping-4.png"
                    alt="sumplekuping"
                    width={231}
                    height={308}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-full space-y-2">
                  <div className="flex items-start justify-between gap-8">
                    <p className="line-clamp-1 font-inter text-sm font-semibold text-[#141718] sm:line-clamp-2 md:w-2/3">
                      Bose QuietComfort Headphones
                    </p>
                    <p className="hidden min-w-max font-inter text-sm font-semibold text-[#141718] sm:block">
                      1 x $79.00
                    </p>
                  </div>

                  <p className="font-inter text-sm font-semibold text-[#141718] sm:hidden">
                    1 x $79.00
                  </p>

                  <p className="font-inter text-sm font-normal text-[#6C7275]">
                    Color: Black
                  </p>
                </div>
              </div>
            </div>
          </div>

          <PaymentMethod />
        </div>

        <div className="h-fit space-y-4">
          <div className="space-y-6 rounded-md border border-[#6C7275] p-6">
            <p className="font-poppins text-lg font-semibold text-[#141718]">
              Order Summary
            </p>

            <div className="flex gap-3">
              <input
                className="h-10 w-full rounded-md border border-[#CBCBCB] px-4 font-inter text-sm font-normal text-[#141718] outline-none placeholder:text-[#6C7275] placeholder:opacity-100 focus:border-[#141718]"
                placeholder="Coupon code"
              />
              <button className="h-10 w-fit rounded-md bg-[#141718] px-6 font-inter text-sm font-medium text-white">
                Apply
              </button>
            </div>

            <div>
              <div className="flex justify-between border-b border-[#6C7275] py-3">
                <div className="flex items-center gap-2">
                  <DiscountIcon fill="#141718" className="h-6 w-6" />
                  <p className="line-clamp-1 font-inter text-sm font-normal text-[#141718]">
                    JenkateMW
                  </p>
                </div>

                <p className="font-inter text-sm font-semibold text-[#38CB89]">
                  -$25.00 [Remove]
                </p>
              </div>

              <div className="flex items-center justify-between py-3">
                <p className="font-inter text-sm font-normal text-[#141718]">
                  Shipping
                </p>
                <p className="font-inter text-sm font-semibold text-[#141718]">
                  Free
                </p>
              </div>
              <div className="flex items-center justify-between py-3">
                <p className="font-inter text-sm font-normal text-[#141718]">
                  Subtotal
                </p>
                <p className="font-inter text-sm font-semibold text-[#141718]">
                  $99.00
                </p>
              </div>
              <div className="flex items-center justify-between py-3">
                <p className="font-poppins text-lg font-semibold text-[#141718]">
                  Total
                </p>
                <p className="font-poppins text-lg font-semibold text-[#141718]">
                  $234.00
                </p>
              </div>
            </div>
          </div>

          <button className="h-10 w-full rounded-md bg-[#141718] px-10 font-inter text-sm font-medium text-white lg:h-[50px] lg:text-base">
            Place Order
          </button>
        </div>
      </div>
    </SectionLayout>
  );
}
