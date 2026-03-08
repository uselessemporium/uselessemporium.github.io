import json
import os
from datetime import datetime
from textwrap import indent
from uuid import uuid4

def get_month_date() -> str:
    """
    Gets the folder name of the entry.
    """
    return datetime.now().strftime("%y-%m")


def get_post_name() -> str:
    """
    Gets the folder name of the entry.
    """
    return datetime.now().strftime("%y-%m-%d")

def create_post_directory():
    """
    Creates the basic structure of the post.
    """
    target_month = get_month_date()
    target_day = get_post_name()
    metadata = {
        "title": "",
        "summary":""
    }
    target_directory = f"./useless-blog/public/posts/{target_month}/{target_day}"
    os.makedirs(target_directory, exist_ok=True)
    print("Created directory:")
    print(target_directory)
    metadata_route = f"{target_directory}/post.json"
    with open(metadata_route,"w") as post_json:
        post_json.write(json.dumps(metadata, indent=4))
    print("Metadata created:")
    print(metadata_route)

    source_md_route = f"{target_directory}/post.md"
    with open(source_md_route,"w") as post_md:
        post_md.write(f"# {target_day}")
    print("Source created:")
    print(source_md_route)

    print("Make sure to complete them! :D")

if __name__ == '__main__':
    create_post_directory()


