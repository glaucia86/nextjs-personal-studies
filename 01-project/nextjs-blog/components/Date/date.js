/**
 * file: components/Date/date.js
 * description: file responsible for the date component
 * data: 10/14/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "LLLL d, yyy")}</time>;
}
