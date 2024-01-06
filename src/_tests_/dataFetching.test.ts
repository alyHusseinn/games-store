import {expect, describe, test} from "vitest";
import { getGameDetails, getSearchResults } from "../dataFetching";

describe("testing our Api", () => {
    test("test get game details function", () => {
        return getGameDetails(3498).then((game) => {
            expect(game.description).toBeTruthy();
            console.log("fuck you vitest");
        })
    })
})

describe("testing helper functions", () => {
    test("test functoins that reaturns the searc results", () => {
        expect(getSearchResults("").length).toEqual(0);
        expect(getSearchResults(" ").length).toEqual(0);
        expect(getSearchResults("g").length).toEqual(4);
        expect(getSearchResults("       g    ").length).toEqual(4);
        expect(getSearchResults("                   ").length).toEqual(0);
    })
})

