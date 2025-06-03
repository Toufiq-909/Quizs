import {z} from "zod"
export let validusername=z.string().min(4,"Please enter a username with at least 4 characters ").max(32,"Username exceeds the maximum allowed length");
export let validmail=z.string().email("invalid mail");
export let validpassword=z.string().min(6,"Weak password, try again").max(32,"Password too lengthy!");