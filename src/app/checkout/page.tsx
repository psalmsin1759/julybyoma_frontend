'use client'
import BreadCrumb from "@/components/shared/BreadCrumb";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MdOutlinePayment } from "react-icons/md";
import React, { ChangeEvent, useState } from "react";
import { shippingMethod } from "@/constants/data";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartSubtotal, selectCartTotal, selectDiscount, selectShippingCost, selectShippingMethod } from "@/redux/cart/cartSelectors";
import CartModalItem from "@/components/cart/CartModalItem";
import { applyDiscount, clearCart, setShippingMethod } from "@/redux/cart/cartSlice";
import { toast } from "sonner";
import { useModal } from "@/contexts/ModalContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone must be numbers only")
    .min(10, "Phone must be at least 10 digits")
    .required("Phone is required"),
  //saveInfo: yup.boolean(),
  //shippingMethod: yup.string().required("Please select a delivery method"),
});

type FormValues = yup.InferType<typeof schema>;

const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  {
    ssr: false,
  }
);

export default function CheckoutPage() {
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const shipping = useSelector(selectShippingCost);
  const discount = useSelector(selectDiscount);
  const total = useSelector(selectCartTotal);
  const selectedShipping = useSelector(selectShippingMethod);
  const { openModal } = useModal();

  const [discountCode, setDiscountCode] = useState("");

  const dispatch = useDispatch();




  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(e.target.value);
  };

  const handleApplyDiscount = () => {
    if (discountCode.trim() !== "") {
      if (discountCode === "12345") {
        dispatch(applyDiscount(500));
        toast.success("Discount applied!", { position: "top-right" });

      } else {
        toast.error("Invalid discount code", { position: "top-right" });
      }
    } else {
      toast.warning("Please enter a value", { position: "top-right" });
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      phone: "",
      //saveInfo: false,
      //shippingMethod: selectedShipping || "",
    },
  });

  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const email = watch("email");
  const phone = watch("phone");
  const address = watch("address");
  const city = watch("city");
  const state = watch("state");

  const isPaymentDisabled =
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    phone.length <= 10 ||
    !address ||
    !city ||
    !state ||
    subtotal <= 0 ||
    total <= 0 ||
    shipping <= 0;

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
    toast.success("Order processed successfully!");
  };

  const router = useRouter()
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY || "";

  const componentProps = {
    email,
    amount: total,
    publicKey,
    text: "Pay Now",
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: firstName + " " + lastName,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: phone,
        },
      ],
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: async (paymentData: any) => {

      try {
        dispatch(clearCart());
        const transactionReference =
          paymentData.reference || paymentData.transaction;


        router.push("/payment/" + transactionReference);
        /*  await createOrder(orderData)
           .then((order) => console.log("Order created:", order))
           .catch((error) => console.error("Order creation failed:", error))
           .finally(() => {
            
             router.push("/payment/" + transactionReference);
           }); */

        //router.push("/payment/06e74ea1-4308-42f8-b293-29174f3f7113");
      } catch (error) {
        console.error("Error processing payment:", error);
      }
    },
    onClose: () => {
      alert("Payment cancelled");
    },
  };

  return (
    <div className=" min-h-screen">
      <BreadCrumb title="Checkout" />
      {/* <h1 className="text-2xl md:text-6xl font-extrabold mt-6 md:mt-10">
        Checkout
      </h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-10 gap-6">
        <div className="flex flex-col gap-2 md:gap-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 md:gap-3"
          >

            <div className="flex justify-between">
              <h3 className="text-xl md:text-2xl font-semibold">Contact</h3>
              <button
                type="button"
                onClick={() => openModal("login")}
                className="underline text-primary"
              >
                Login
              </button>
            </div>

            <Controller
              name="email"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Email" />}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}


            <h3 className="text-xl md:text-2xl font-semibold">Delivery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input {...field} placeholder="First Name" />}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Last Name" />}
              />
            </div>
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}

            <Controller
              name="address"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Address" />}
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Controller
                name="city"
                control={control}
                render={({ field }) => <Input {...field} placeholder="City" />}
              />

              <Controller
                name="state"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="" disabled>
                      Select State
                    </option>
                    <option value="Abia">Abia</option> <option value="Adamawa">Adamawa</option> <option value="Akwa Ibom">Akwa Ibom</option> <option value="Anambra">Anambra</option> <option value="Bauchi">Bauchi</option> <option value="Bayelsa">Bayelsa</option> <option value="Benue">Benue</option> <option value="Borno">Borno</option> <option value="Cross River">Cross River</option> <option value="Delta">Delta</option> <option value="Ebonyi">Ebonyi</option> <option value="Edo">Edo</option> <option value="Ekiti">Ekiti</option> <option value="Enugu">Enugu</option> <option value="FCT">FCT</option> <option value="Gombe">Gombe</option> <option value="Imo">Imo</option> <option value="Jigawa">Jigawa</option> <option value="Kaduna">Kaduna</option> <option value="Kano">Kano</option> <option value="Katsina">Katsina</option> <option value="Kebbi">Kebbi</option> <option value="Kogi">Kogi</option> <option value="Kwara">Kwara</option> <option value="Lagos">Lagos</option> <option value="Nasarawa">Nasarawa</option> <option value="Niger">Niger</option> <option value="Ogun">Ogun</option> <option value="Ondo">Ondo</option> <option value="Osun">Osun</option> <option value="Oyo">Oyo</option> <option value="Plateau">Plateau</option> <option value="Rivers">Rivers</option> <option value="Sokoto">Sokoto</option> <option value="Taraba">Taraba</option> <option value="Yobe">Yobe</option> <option value="Zamfara">Zamfara</option>
                  </select>
                )}
              />
            </div>
            {(errors.city || errors.state) && (
              <p className="text-red-500 text-sm">
                {errors.city?.message || errors.state?.message}
              </p>
            )}

            <Controller
              name="phone"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Phone" />}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}


            <div className="flex items-center space-x-2"> <Checkbox id="save-info" /> <label htmlFor="save-info" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Save this information for next time </label> </div>


            <h3 className="text-xl md:text-2xl font-semibold">Delivery Method</h3>

            <RadioGroup
              value={selectedShipping}
              onValueChange={(newValue) => { dispatch(setShippingMethod(newValue)); }}
            >
              {shippingMethod.map((method) => (<label key={method.name} htmlFor={method.name} className={`flex items-center justify-between rounded-lg border p-2 cursor-pointer transition-colors ${selectedShipping === method.name ? "bg-primary text-white border-primary" : "bg-white border-gray-300 hover:border-primary/50"}`} > <div className="flex items-center gap-3"> <RadioGroupItem id={method.name} value={method.name} className="data-[state=checked]:bg-white data-[state=checked]:border-primary" /> <span className="font-medium">{method.name}</span> </div> <span className="text-sm"> ₦{method.amount.toLocaleString()} </span> </label>))} </RadioGroup>

            <PaystackButton
              {...componentProps}
              className={`hidden  rounded-2xl h-14 mt-4 md:flex items-center justify-center text-lg md:text-xl  ${isPaymentDisabled ? "disabled bg-gray-300" : "bg-black text-white"
                }`}
              disabled={isPaymentDisabled}
            />

          </form>
        </div>

        <div className="p-4 flex flex-col gap-3 md:gap-4 bg-gray-50 rounded">
          {cartItems.length > 0 ? <>
            {cartItems.map((cartItem, index) => (
              <CartModalItem key={index} cartItem={cartItem} view="checkout" />
            ))}</> : <div className="w-full flex justify-center items-center ">
            <h3 className="text-xl font-normal">No item in cart</h3>
          </div>}

          <div className="w-full flex gap-2 md:gap-4">
            <Input
              name="discount"
              value={discountCode}
              onChange={onChange}
              placeholder="Discount code"
            />
            <Button onClick={handleApplyDiscount}>Apply</Button>
          </div>
          <div className="flex justify-between">
            <span className="text-sm md:text-lg ">Subtotal</span>
            <span className="text-sm md:text-lg font-semibold">
              ₦{subtotal.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm md:text-lg ">Shipping</span>
            <span className="text-sm md:text-lg font-semibold">
              +₦{shipping.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm md:text-lg ">Discount</span>
            <span className="text-sm md:text-lg font-semibold">
              -₦{discount.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm md:text-lg ">Total</span>
            <span className="text-xl md:text-xxl font-semibold">
              ₦{total.toLocaleString()}
            </span>
          </div>


          <PaystackButton
            {...componentProps}
            className={`flex md:hidden  rounded-2xl h-14 mt-4 items-center justify-center text-lg md:text-xl  ${isPaymentDisabled ? "disabled bg-gray-300" : "bg-black text-white"
              }`}
            disabled={isPaymentDisabled}
          />
        </div>

      </div>
    </div>
  );
}
