import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl">
        <Card className="shadow-2xl bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-yellow-400 p-3 rounded-full shadow-lg">
                <Sun className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800">
              A Bright New Beginning
            </CardTitle>
            <p className="text-muted-foreground pt-2">
              Your new application, bathed in a cheerful yellow glow.
            </p>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              This is the start of something amazing. Inspired by the clarity of apps like Notion and the focus of a simple sticky note, we are building a clean, delightful experience. The warm background is designed to spark creativity and joy.
            </p>
            <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white font-bold shadow-md hover:shadow-lg transition-shadow">
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
