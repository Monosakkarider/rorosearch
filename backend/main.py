from fastapi import FastAPI
import requests
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from apiFormat import Movie

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

API_KEY = os.getenv("OMDBAPIKEY")

requestUrl = f"http://www.omdbapi.com/?t="
@app.get("/getMovie")
def get_movie(movie_name: str):
    response = requests.get(f"{requestUrl}{movie_name}&apikey={API_KEY}")
    filtered_response = Movie.from_json(response.text)
    return filtered_response
    



