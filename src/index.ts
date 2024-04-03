import { BloomFilter } from "./bloom-filter-v13";
import { BloomFilter as BloomFilterV14 } from "./bloom-filter-v14";

function main() {
    console.log("start");

    const paths: string[] = ['/_not-found', '/login'];
    const staticFilter = BloomFilter.from([...paths])
    const staticFilterV14 = BloomFilterV14.from([...paths])

    const testPaths = [
        /** true positive pattern */
        '/example/1', 
        /** false positive pattern */
        '/example/138'
    ]

    const staticFilterResults = testPaths.map((testPath) => staticFilter.contains(testPath));
    const staticFilterV14Results = testPaths.map((testPath) => staticFilterV14.contains(testPath));

    console.log({'v13.5.6': staticFilterResults.map((result, i) => [testPaths[i], result]).filter((item) => item[1])})
    console.log({'v14': staticFilterV14Results.map((result, i) => [testPaths[i], result]).filter((item) => item[1])})

    console.log("end");
}

main();
