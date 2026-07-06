CATEGORY_MAP = {

    "electrician": [
        "electrician",
        "electrical",
        "electric work",
        "electric repair",
        "wiring"
    ],

    "plumber": [
        "plumber",
        "plumbing",
        "pipe repair",
        "water fitting"
    ],

    "painter": [
        "painter",
        "painting",
        "wall paint"
    ]
}

def normalize_category(user_input):

    user_input = user_input.strip().lower()

    for category, aliases in CATEGORY_MAP.items():

        if user_input == category:
            return category

        if user_input in aliases:
            return category

    return user_input