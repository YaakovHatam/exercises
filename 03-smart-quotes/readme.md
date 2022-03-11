# Smart quotes app
## Client side
- a page with all the quotes and their ratings, at the header an option to get a randon quote and rate him.
contain navbar with `home` link that navigate to `/`

### Pages
#### main page
List of quotes, very quote represented in a card:
- image: from `by.picUrl`
- Title: from `by.name`
- text: from `quote`
- button: go to author (link)

#### Author page
Table of quotes from this author

## Server side
- an endpoint `/quote` that sends to the client a random quote to rate.
- an endpoint `/rate-quote` that receive and quote id and rating between 1 to 5.
- an endpoint `/` that show all the quotes and their ratings.

