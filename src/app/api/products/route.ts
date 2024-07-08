import connectDB from "@/dbconfig/dbconfig";
import Product from "@/models/product.model";
import { NextResponse, NextRequest } from "next/server";

connectDB();

// creation
export async function POST(request: NextRequest) {
  try {
    const { ...data } = await request.json();

    const newProduct = new Product({ ...data });
    const savedProduct = await newProduct.save();

    if (!savedProduct) {
      return NextResponse.json(
        { error: "FAILED TO SAVE PRODUCT AFTER CREATION" },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: "PRODUCT CREATED SUCCESSFULLY",
      status: 200,
      success: true,
      data: savedProduct,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "FAILED TO CREATE PRODUCT" },
      { status: 501 }
    );
  }
}

// updation
export async function PATCH(request: NextRequest) {
  try {
    const { id, ...data } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "ID IS MANDATORY TO UPDATE FIELDS" },
        { status: 401 }
      );
    }

    const product = await Product.findOneAndUpdate(
      { _id: id },
      { ...data },
      { new: true }
    );

    if (!product) {
      return NextResponse.json(
        { error: "FAILED TP UPDATE PRODUCT BETWEEN RUNNING UPDATIONS" },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: "PRODUCT UPDATED SUCCESSFULLY",
      status: 200,
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "FAILED TO UPDATE PRODUCT" },
      { status: 501 }
    );
  }
}

// deletion
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "ID IS MANDATORY TO DELETE FIELDS" },
        { status: 401 }
      );
    }

    const deletedProduct = await Product.deleteOne({
      _id: id,
    });

    if (!deletedProduct) {
      return NextResponse.json(
        { error: "FAILED TO DELETE PRODUCT BETWEEN RUNNING DELETIONS" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: "PRODUCT DELETED SUCCESSFULLY",
      status: 200,
      success: true,
      data: deletedProduct,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "FAILED TO DELETE PRODUCT" },
      { status: 501 }
    );
  }
}

// fetching
export async function GET() {
  try {
    const fetchedProducts = await Product.find({});

    if (!fetchedProducts) {
      return NextResponse.json(
        { error: "FAILED TO FETCH ALL PRODUCTS BETWEEN RUNNING FETCHINGS" },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: "PRODUCTS FETCHED SUCCESSFULLY",
      status: 200,
      success: true,
      data: fetchedProducts,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "FAILED TO FETCH ALL PRODUCT" },
      { status: 501 }
    );
  }
}
