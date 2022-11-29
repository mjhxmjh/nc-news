// here we will make a component to sort the articles list in either ascending or descending order from the
//  here we go here we go here we go

// sort articles - sort by date, by comment count, by votes, (ascending and descending options) - find the object key which we want
// to sort by and create a new array...push the ordered list in to a new array and use if/elses. We need to re-render the articles by date. How can
// we do this? check the availables queries on the backend server?

export default function Sort() {
  return (
    <section className="sort-by">
      <label for="sort-by">Sort by: </label>
      <select onClick={console.log("change")} name="sort-by" id="sort-by">
        <option>Date descending</option>
        <option>Date ascending</option>
      </select>
    </section>
  );
}
