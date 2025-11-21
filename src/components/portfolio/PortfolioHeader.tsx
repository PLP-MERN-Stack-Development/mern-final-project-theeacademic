import { Button } from "@/components/ui/button";
import { TrendingUp, Plus, Home, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

export const PortfolioHeader = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out",
      description: "You've been successfully signed out.",
    });
    navigate("/");
  };

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">ApexView Capital</h1>
              <p className="text-sm text-muted-foreground">Real-Time Portfolio Tracker</p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" className="hidden sm:flex">
              Market Status: <span className="ml-2 text-success">Open</span>
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add Transaction</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSignOut}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
