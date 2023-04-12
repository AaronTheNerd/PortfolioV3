def main():
    verticalSections = ["home", "about", "list", "work", "bug", "contact"]

    for index1 in range(len(verticalSections)):
        for index2 in range(len(verticalSections)):
            if index1 < index2:
                print(f"transition(\"{verticalSections[index1]} => {verticalSections[index2]}\", slideDown),")
            if index1 > index2:
                print(f"transition(\"{verticalSections[index1]} => {verticalSections[index2]}\", slideUp),")

if __name__ == "__main__":
    main()