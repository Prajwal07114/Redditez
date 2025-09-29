
import { createContext } from "react";
import { supabase } from "../supabase.client";


interface AuthContextType{
  
  signInWithGithub : ()=>void;
  signOut : () => void ;
}

const AuthContext =createContext<AuthContextType | undefined>(undefined);