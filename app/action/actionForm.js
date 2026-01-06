"use server";
import fs from "fs/promises";

export default async function submitAction(e) {
        console.log(e.get("name"),e.get("add") );
        let a=await fs.writeFile("action.txt",`Name: ${e.get("name")}\nEmail: ${e.get("add")}\n`,{flag:'a+'});
        console.log(a);              
}
