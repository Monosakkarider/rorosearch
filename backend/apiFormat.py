import json
from dataclasses import dataclass, field

@dataclass
class Movie:
    Title: str
    Year: str
    Runtime: str
    Genre: str
    Actors: str
    imdbRating: str
    Type: str

    @classmethod
    def from_json(cls, json_str):
        json_dict = json.loads(json_str)
        filtered_data = {key: json_dict[key] for key in cls.__dataclass_fields__.keys()}
        return cls(**filtered_data)