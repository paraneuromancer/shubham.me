import fs from "fs"
import path from "path"

const DATA_DIRECTORY = path.join(process.cwd(), "content/data")

export function getNowData() {
    const fullPath = path.join(DATA_DIRECTORY, "now.json")
    if (!fs.existsSync(fullPath)) return null
    const fileContents = fs.readFileSync(fullPath, "utf8")
    return JSON.parse(fileContents)
}

export function getRecommendationsData() {
    const fullPath = path.join(DATA_DIRECTORY, "recommendations.json")
    if (!fs.existsSync(fullPath)) return null
    const fileContents = fs.readFileSync(fullPath, "utf8")
    return JSON.parse(fileContents)
}

export function getExperienceData() {
    const fullPath = path.join(DATA_DIRECTORY, "experience.json")
    if (!fs.existsSync(fullPath)) return []
    const fileContents = fs.readFileSync(fullPath, "utf8")
    return JSON.parse(fileContents)
}
