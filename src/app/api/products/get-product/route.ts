import connectDB from "@/dbconfig/dbconfig";
import Product from "@/models/product.model";
import { NextResponse, NextRequest } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "ID IS MANDATORY TO FETCH FIELD" },
        { status: 401 }
      );
    }

    const fetchedProduct = await Product.findOne({ _id: id });

    if (!fetchedProduct) {
      return NextResponse.json(
        { error: "FAILED TO FETCH SINGLE PRODUCT BETWEEN RUNNING FETCHINGS" },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: "PRODUCT FETCHED SUCCESSFULLY",
      status: 200,
      success: true,
      data: fetchedProduct,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "FAILED TO FETCH SINGLE PRODUCT" },
      { status: 501 }
    );
  }
}
