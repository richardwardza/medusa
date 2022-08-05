import { MockRepository } from "medusa-test-utils"
import { BatchJob } from "../../models"
import { BatchJobRepository } from "../batch-job"

export const BatchJobRepositoryMock = MockRepository({
  create: jest.fn().mockImplementation((data) => {
    return Object.assign(new BatchJob(), data)
  })
}) as BatchJobRepository