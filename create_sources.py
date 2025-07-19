import os
import json

def build_post_tree(base_path):
    """
    Builds the basic json containing the folder structure of the blogs.
    """
    result = {}

    for month_folder in sorted(os.listdir(base_path)):
        month_path = os.path.join(base_path, month_folder)
        if not os.path.isdir(month_path):
            continue

        entries = {}

        for post_folder in sorted(os.listdir(month_path)):
            post_path = os.path.join(month_path, post_folder)
            post_file = os.path.join(post_path, 'post.json')

            if os.path.isdir(post_path) and os.path.isfile(post_file):
                try:
                    with open(post_file, 'r') as f:
                        post_data = json.load(f)
                        entries[post_folder] = {
                            "title": post_data.get("title", ""),
                            "summary": post_data.get("summary", "")
                        }
                except Exception as e:
                    print(f"Error reading {post_file}: {e}")

        if entries:
            result[month_folder] = entries

    return result

if __name__ == "__main__":
    base = './useless-blog/public/posts'
    output = './useless-blog/src/folderTree.json'

    tree = build_post_tree(base)
    with open(output, 'w') as file:
        file.write(json.dumps(tree, indent=4))

    print(f"Folder tree written to {output}")