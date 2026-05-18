import { NextResponse } from "next/server";
import User from "@/lib/models/User";
import dbConnect from "@/lib/mongodb";

export async function POST(request){
    try{
        await dbConnect();
        const body = await request.json();

        const{ username , email, password} = body ;
        const newUser = await User.create({
            username: username,
            email: email,
            password: password
        })

        return NextResponse.json({message:"User created successfully", data:newUser},
            {status:201});
    } catch (error) {

        return NextResponse.json({message:"Failed to create user", error:error},
            {status:500});
    }
}

export async function GET() {
  try {
    await dbConnect();

    const allUsers = await User.find({});

    return NextResponse.json(
      { message: 'Users Retrieved Successfully', data: allUsers },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch Users', error: error },
      { status: 500 },
    );
  }
}