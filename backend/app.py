from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import ollama, os

# ---- Config ----
os.environ["OLLAMA_HOST"] = os.getenv("OLLAMA_HOST", "http://127.0.0.1:11434")
MODEL = os.getenv("OLLAMA_MODEL", "phi3:mini")

app = FastAPI(title="Chat Ollama API")

# CORS (autorise le frontend local)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # en prod: restreindre
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatItem(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: list[ChatItem]

class ChatResponse(BaseModel):
    reply: str

SYSTEM_DEFAULT = (
    "Tu es un assistant d'enquête concis et crédible. "
    "Réponds en français, 3–6 phrases. Si une info manque, propose une action concrète."
)

@app.post("/api/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    messages = req.messages[:]
    if not any(m.role == "system" for m in messages):
        messages.insert(0, ChatItem(role="system", content=SYSTEM_DEFAULT))
    try:
        rsp = ollama.chat(
            model=MODEL,
            messages=[m.dict() for m in messages],
            options={"temperature": 0.4, "num_gpu": 0, "use_gpu": False},
        )
        return ChatResponse(reply=rsp["message"]["content"])
    except Exception as e:
        return ChatResponse(reply=f"[Erreur côté modèle] {e}")
