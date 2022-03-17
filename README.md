# DoneDone

## Todo List

- add NLP for task quick add with dates (https://github.com/neilgupta/Sherlock)
- add task validation to ensure all tasks have an end date
- add modal onclick
- add react router for opening task modal
- allow tasks to contain tasks (becomes a project)
- default sort order is due date
- style tasks
- define colour theme
- allow tasks to be manually sorted
- add persistence to DB
- add authentication (MS, Google)
- create calendar view
- create project view
- create reading list (for list of bookmarks)
- search

## Object Definitions

```
Task {
    id: guid
    title: string
    description: string
    startdate: datetime
    enddate: datetime
    isAllDay: bool
    isComplete: bool
    tags: tag[]
    tasks: task[]
    colour: string (html colour string)
    isProject: bool
}

Tag {
    name: string,
    colour: string (html colour string)
}
```
