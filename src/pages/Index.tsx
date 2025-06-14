
import { useState } from "react";
import { Mic, MicOff, Video, VideoOff, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(true);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">AI Agent Chat</h1>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                isConnected 
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-300 border border-red-500/30'
              }`}>
                {isConnected ? 'Connected' : 'Disconnected'}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Speak with Your AI Agent
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Experience seamless voice conversations with advanced AI technology. 
              Click connect to start your interactive session.
            </p>
          </div>

          {/* Agent Interface Card */}
          <Card className="bg-black/40 backdrop-blur-md border-white/10 overflow-hidden">
            {/* Controls Bar */}
            <div className="bg-black/30 px-6 py-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    variant={isMuted ? "destructive" : "secondary"}
                    size="sm"
                    onClick={() => setIsMuted(!isMuted)}
                    className="flex items-center space-x-2"
                  >
                    {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    <span>{isMuted ? 'Unmute' : 'Mute'}</span>
                  </Button>
                  
                  <Button
                    variant={isVideoOff ? "destructive" : "secondary"}
                    size="sm"
                    onClick={() => setIsVideoOff(!isVideoOff)}
                    className="flex items-center space-x-2"
                  >
                    {isVideoOff ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                    <span>{isVideoOff ? 'Turn On' : 'Turn Off'}</span>
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  {!isConnected ? (
                    <Button 
                      onClick={handleConnect}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      Connect to Agent
                    </Button>
                  ) : (
                    <Button 
                      variant="destructive"
                      onClick={handleDisconnect}
                    >
                      Disconnect
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Agent iframe Container */}
            <div className="relative" style={{ height: '600px' }}>
              {isConnected ? (
                <iframe 
                  src="https://bey.chat/defaultAgent"
                  allow="camera; microphone" 
                  allowFullScreen
                  className="w-full h-full border-0"
                  title="AI Agent Interface"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">AI Agent Ready</h3>
                    <p className="text-gray-400 mb-6 max-w-md">
                      Click "Connect to Agent" to start your conversation. 
                      Make sure to allow microphone access for the best experience.
                    </p>
                    <Button 
                      onClick={handleConnect}
                      size="lg"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      Start Conversation
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="bg-black/30 backdrop-blur-md border-white/10 p-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Voice Interaction</h3>
              <p className="text-gray-400 text-sm">
                Natural voice conversations with advanced speech recognition and synthesis.
              </p>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md border-white/10 p-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visual Interface</h3>
              <p className="text-gray-400 text-sm">
                Rich visual interactions with camera support for enhanced communication.
              </p>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md border-white/10 p-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart Responses</h3>
              <p className="text-gray-400 text-sm">
                Intelligent AI responses powered by advanced language models.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
