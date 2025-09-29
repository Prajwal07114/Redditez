
import { createContext } from "react";
import { supabase } from "../supabase.client";


interface AuthContextType{
  user :User |null;
  signInWithGithub : ()=>void;
  signOut : () => void ;
}

const AuthContext =createContext<AuthContextType | undefined>(undefined);