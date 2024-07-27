"use client";

import { getorderDetails } from "@/app/lib/features/orderDetails/orderDetailsslice";
import { getPreviousPath } from "@/app/lib/features/path/pathslice";
import { usePreviousRoute } from "@/app/utils/utils";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const Collections = ({ step }) => {
    const router = useRouter();
    const dispatch = useDispatch()
    const [addressData, setAddressData] = useState(null);
    const { userData } = useSelector((state) => state.auth);
    const [dayTimeIntervals, setDayTimeIntervals] = useState([]);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        dispatch(
            getorderDetails({
                time: data?.daytime,
                orderType: step === 1 ? "collection" : "delivery",
            })
        );
        router.push("/order/checkout")

    };
    useEffect(() => {
        generateDayTimeIntervals();
    }, []);

    const generateDayTimeIntervals = () => {
        const intervals = [];
        const start = new Date();
        const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const day = daysOfWeek[start.getDay()];

        start.setHours(0, 0, 0, 0);
        const end = new Date(start);
        end.setHours(23, 59, 0, 0);

        while (start <= end) {
            intervals.push({
                day: day,
                time: start.toTimeString().slice(0, 5),
            });
            start.setMinutes(start.getMinutes() + 15);
        }

        setDayTimeIntervals(intervals);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="border-t-2 p-2 space-y-6">
            <div className="space-y-1">
                <h1>Please Select Time</h1>
                <select
                    {...register("daytime")}
                    id="day"
                    className="px-4 py-2 border-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                >
                    {dayTimeIntervals.map((interval, index) => (
                        <option
                            key={index}
                            value={`${interval.day}-${interval.time}`}
                        >
                            {interval.day} - {interval.time}
                        </option>
                    ))}
                </select>
            </div>

            <div className="bg-red-800 p-6 rounded-md text-white">
                <h2 className="font-bold text-lg mb-4">ORDERING INFORMATION:</h2>
                <p className="mb-4">
                    <strong>Please note:</strong>{" "}
                    <a href="#" className="underline">
                        Orders take a minimum of 45 minutes
                    </a>{" "}
                    to deliver. Whilst we endeavour to get your order to you on
                    time, there may be delays during busier periods.
                </p>
                <p className="mb-4">
                    If you have any issues with your Tops Pizza order or experience,
                    in the first instance please contact the Tops Store you ordered
                    from directly.
                </p>
                <p className="mb-2">Your order is being placed with:</p>
                <p className="font-bold">91 Joel St, Pinner, Northwood HA6 1LW, UK
<br/>
info@hothousenorthwood.co.uk</p>
                <p className="flex items-center mt-2">
                  <PhoneIcon className="mr-2" />
                  + 441923510520
                </p>
            </div>
            <button
                className="bg-green-700 hover:bg-green-600  py-2 w-full text-white rounded"
                type="submit"
            >
                Proceed To Checkout
            </button>
        </form>
    )
}

export default Collections