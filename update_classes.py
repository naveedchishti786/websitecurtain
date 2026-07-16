import os
import glob

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content.replace('object-cover', 'object-contain object-center')
    new_content = new_content.replace('bg-cover', 'bg-contain')

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

def main():
    search_pattern = os.path.join('src', '**', '*.jsx')
    files = glob.glob(search_pattern, recursive=True)
    for file in files:
        replace_in_file(file)

if __name__ == '__main__':
    main()
