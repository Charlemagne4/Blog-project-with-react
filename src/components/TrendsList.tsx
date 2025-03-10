const trends = [
  { title: 'The Art of Racing in the Rain', author: 'Garth Stein' },
  {
    title: 'Go Like Hell: Ford, Ferrari, and Their Battle for Speed and Glory at Le Mans',
    author: 'A.J. Baime'
  },
  { title: 'How to Build a Car', author: 'Adrian Newey' },
  { title: 'The Mechanic: The Secret World of the F1 Pitlane', author: "Marc 'Elvis' Priestley" },
  { title: 'Driven to Win: Racing Memoirs', author: 'Mario Andretti' },
  { title: 'The Limit: Life and Death on the 1961 Grand Prix Circuit', author: 'Michael Cannell' },
  {
    title: 'Speed Read F1: The Technology, Rules, History and Concepts Key to the Sport',
    author: 'Stuart Codling'
  },
  { title: 'Winning Is Not Enough', author: 'Jackie Stewart' },
  { title: 'Racing the Rain', author: 'John L. Parker Jr.' }
];

function TrendsList() {
  return (
    <div className="w-full overflow-scroll overflow-x-hidden rounded-lg p-4 shadow">
      <h3 className="mb-4 text-lg leading-none font-semibold">Trends of now</h3>
      <ul>
        {trends.map((trend, index) => {
          return (
            <li className="flex flex-col rounded-lg p-2 hover:bg-gray-800">
              <span className="font-medium">{trend.title}</span>
              <span className="text-sm text-gray-500">by {trend.author}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default TrendsList;
