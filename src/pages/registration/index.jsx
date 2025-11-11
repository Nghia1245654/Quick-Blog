import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import logo from "@/assets/logo-lGLL0Zb0.png"
import { Link } from 'react-router-dom'
import { toast } from "react-hot-toast";
import {useState} from 'react'
import { registrationUser } from "@/services/api/user";
import { Spinner } from "@/components/ui/spinner"
export default function Registration() {
    const [email, setEmail] = useState("");
    const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const handleRegistration = async (e) => {
    try {
      if (!email || !password || !username) {
        toast.error("Please fill in all fields");
        return;
      }
      setLoading(true);
      const response = await registrationUser({ email, password,username });
      console.log(response);
      toast.success("Registration successful");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center bg-[linear-gradient(90deg,rgba(2,0,36,1)_0%,#5044e5_35%,rgba(0,212,255,1)_100%)]">
      <Card className="text-card-foreground flex flex-col gap-6 border shadow-sm bg-white p-8 rounded-md max-w-3xl mx-auto h-fit absolute">
        <div className="flex flex-col items-center justify-center gap-4 w-xs">
            <Link to="/">
              <img src={logo} alt="logo" className="w-15 h-15 mx-auto " />
            </Link>
              
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                  />
                  <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    required
                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                  />
                    <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                  />

            <Button
            disabled={Loading}
              onClick={handleRegistration}
              type="submit"
              className="  inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full text-white c"
            > {Loading ? <div className="flex items-center justify-center gap-2"> <Spinner /> Signing Up </div> : "Sign Up"}
            </Button>

            <p className="mt-4 text-center text-sm text-gray-500">
              Already have an account? 
              <a href="/login" className="text-sm text-primary ">
                Login
              </a>
            </p>
            </div>
      </Card>
    </div>
  )
}
