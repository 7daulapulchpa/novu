import { UserSession } from '@novu/testing';
import { expect } from 'chai';

describe('Get My Environments - /environments (GET)', async () => {
  let session: UserSession;

  before(async () => {
    session = new UserSession();
    await session.initialize();
  });

  it('should return all environments to user', async () => {
    const { body } = await session.testAgent.get('/v1/environments');

    expect(body.data.length).to.be.greaterThanOrEqual(2);
    for (const elem of body.data) {
      expect(elem._organizationId).to.eq(session.organization._id);
    }
  });
});
