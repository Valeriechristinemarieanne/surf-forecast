import React from "react";
import allCountries from "../src/allCountries";
import { render, waitForElement } from "@testing-library/react";
import axios from "axios";

jest.mock("axios");
